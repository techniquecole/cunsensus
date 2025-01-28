document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const options = document.getElementById('options').value.split(',').map(option => option.trim());
    const numVoters = parseInt(document.getElementById('numVoters').value);
    const votesPerVoter = parseInt(document.getElementById('votesPerVoter').value);
    const preferredOptions = parseInt(document.getElementById('preferredOptions').value);
    const voterSelections = document.getElementById('voterSelections').value.split('\n').map(selection => selection.split(',').map(option => option.trim()));

    console.log('numVoters:', numVoters);
    console.log('voterSelections.length:', voterSelections.length);

    if (preferredOptions > options.length) {
        alert('Preferred options cannot be more than the total number of options.');
        return;
    }

    if (voterSelections.length !== numVoters) {
        alert('Number of voter selections does not match the number of voters.');
        return;
    }

    const votes = {};
    options.forEach(option => votes[option] = 0);

    voterSelections.forEach(selection => {
        if (selection.length !== votesPerVoter) {
            alert('Each voter must select exactly ' + votesPerVoter + ' options.');
            return;
        }
        selection.forEach(option => {
            if (!options.includes(option)) {
                alert('Invalid option selected: ' + option);
                return;
            }
            votes[option]++;
        });
    });

    const sortedOptions = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);
    const selectedOptions = sortedOptions.slice(0, preferredOptions);

    document.getElementById('results').innerHTML = `<h2>Selected Options:</h2><ul>${selectedOptions.map(option => `<li>${option} (${votes[option]} votes)</li>`).join('')}</ul>`;
});