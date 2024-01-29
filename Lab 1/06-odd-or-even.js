for (let i = 0; i <= 15; i++) {
    const message = i % 2 === 0 ? `${i} is even.` : `${i} is odd.`;
    window.document.write(`${message}<br>`);
    window.console.log(message);
}
