
const App = () => {
  let inputRef;
  return (
    <>
      <input
        type="file"
        hidden={true}
        ref={refParam => inputRef = refParam}
      />
      <button
        style={{ backgroundColor: "orange", color: "white" }}
        onClick={() => inputRef.click()}
      >
        Upload
      </button>
    </>
  );
}

export default App;
