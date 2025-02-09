function startConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.innerHTML = "🎊🎊🎊";
    confettiContainer.style.position = "fixed";
    confettiContainer.style.top = "50%";
    confettiContainer.style.left = "50%";
    confettiContainer.style.transform = "translate(-50%, -50%)";
    confettiContainer.style.fontSize = "50px";
    document.body.appendChild(confettiContainer);
    
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
}
