
export function initPaymentPopup(buttonSelector) {
    const buttons = document.querySelectorAll(buttonSelector);
    const close = document.getElementById('close');
    const payment = document.getElementById('payment');

    if (!buttons.length || !payment || !close) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            payment.style.display = "flex";
        });
    });

    close.addEventListener('click', () => {
        payment.style.display = "none";
    });
}
CaretPosition.js 