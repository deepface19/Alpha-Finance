import OnramperWidget from "@onramper/widget";

export default function App() {
  return (
    <div
      style={{
        width: "440px",
        height: "595px",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        margin: "auto"
      }}
    >
      <OnramperWidget
        defaultAmount={200}
        API_KEY="pk_test_ass3gtLSWQpI11IWUZLJdrfyQhj7bTw_3xwLvhEvH6Q0"
        filters={{
          onlyCryptos: ["TRX"]
         
        }}
      />
    </div>
  );
}
