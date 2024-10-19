let loading = false;
let currentPage = 1;
const maxPages = 4; // הגדרת מספר הדפים המקסימלי (כל דף מוסיף 3 פריטים)

function loadMoreItems() {
    if (loading || currentPage > maxPages) return; // אם כבר טוענים או הגענו למקסימום, לא טוענים שוב

    loading = true;
    document.getElementById('loading').style.display = 'block'; // הצגת הודעת טעינה

    // לדוגמה, חכה 1 שניה ואז טען פריטים נוספים
    setTimeout(() => {
        const content = document.getElementById('content');

        // הוספת פריטים חדשים
        for (let i = 1; i <= 3; i++) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerText = `Additional Item ${currentPage * 3 + i}`;
            content.appendChild(newItem); // הוספת התוכן למקום המתאים
        }

        loading = false;
        document.getElementById('loading').style.display = 'none'; // הסרת הודעת טעינה
        currentPage++;

        // בדיקה אם הגענו למקסימום פריטים
        if (currentPage > maxPages) {
            window.onscroll = null; // ביטול אירוע הגלילה לאחר שהגענו למקסימום
        }
    }, 1000); // זמן טעינה מדמה של 1 שניה
}

// טען פריטים נוספים כאשר הגולל מגיע לסוף הדף
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreItems();
    }
};

// טען פריטים נוספים בהתחלה
loadMoreItems();