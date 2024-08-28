export default function handleInput(inputId, inputValue, handler) {
  const payload = {
    id: inputId,
    value: inputValue ? inputValue : '',
  };
  handler(payload);
}
