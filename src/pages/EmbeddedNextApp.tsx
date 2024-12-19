const EmbeddedNextApp = () => {
  return (
    <div className="flex-1 w-full h-screen">
      <iframe
        src="https://ethiopia-lottto.vercel.app/"
        title="Lotto | ETHiopia"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default EmbeddedNextApp;
