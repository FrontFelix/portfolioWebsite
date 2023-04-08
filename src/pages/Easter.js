export default function Easter() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="easter-bg px-10"
    >
      <div className="items-center flex flex-col lg:flex-row justify-center lg:gap-12 gap-2 lg:w-3/5">
        <img
          className="w-3/5 md:w-1/3 lg:w-full mx-auto"
          src="./markusbg.png"
        />
        <div className="text-center lg:text-left">
          <h1
            style={{ fontSize: "3rem" }}
            className="font-bold"
          >
            GLAD PÅSK
          </h1>
          <p className="w-1/2 lg:w-full text-left mx-auto">
            Glad påsk från mig, Markus! Jag hoppas att du har en ägg-cellent dag
            och att påskharen lämnar massor av godis i ditt bo. Låt oss hoppsa
            in i våren och skaka av oss vinterns skäggiga burkighet!
          </p>
        </div>
      </div>
    </div>
  );
}
