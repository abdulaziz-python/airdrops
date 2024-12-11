function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

async function addStar(airdropId) {
    const csrftoken = getCookie('csrftoken');
    try {
        const response = await fetch(`/add-star/${airdropId}/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            const starCount = document.querySelector(`[data-airdrop-id="${airdropId}"] .star-count`);
            if (starCount) {
                starCount.textContent = data.stars;
            }
        }
    } catch (error) {
        console.error('Error adding star:', error);
    }
}