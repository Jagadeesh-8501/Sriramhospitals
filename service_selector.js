function openService(service) {
    fetch('services.json')
        .then(response => response.json())
        .then(data => {
            if (data[service]) {
                const url = `service-details.html?service=${service}`;
                // window.location.href = url; // Use window.location.href to navigate to the URL
                window.open(url, '_blank');
            } else {
                console.error('Service not found in JSON.');
            }
        })
        .catch(error => {
            console.error('Error loading the JSON file:', error);
        });
}
