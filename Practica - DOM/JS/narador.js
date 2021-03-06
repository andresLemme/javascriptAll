export default function speechReader() {
  const $speechSelect = document.getElementById("speech-select");
  const $speechTextArea = document.getElementById("speech-text");
  const $speechBtn = document.getElementById("speech-btn");
  const speechMessage = new SpeechSynthesisUtterance();

  // console.log(speechMessage)
  let voices = [];

  document.addEventListener("DOMContentLoaded", (e) => {
    // console.log(window.speechSynthesis)
    // console.log(window.speechSynthesis.getVoices())
    window.speechSynthesis.addEventListener("voiceschanged", (e) => {
      // console.log(e)
      voices = window.speechSynthesis.getVoices();
      // console.log(voices)
      voices.forEach((voice) => {
        const $option = document.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  document.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
    // console.log(speechMessage)
  });
  document.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextArea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
