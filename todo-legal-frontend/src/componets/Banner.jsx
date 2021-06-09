function Banner({ title, login }) {
  return (
    <div className="text-center">
      <h2 className="text-[#384F7F] font-bold text-xl mt-8">{title}</h2>
      <p className="-m-2 text-[#384F7F] font-extrabold">________________</p>
      {
        <div className="py-8 text-[#384F7F]">
          {login ? (
            <>
              <p>Por favor ingresa a tu cuenta ingresando tu</p>
              <p>número de cédula y contraseña. Si no</p>
              <p>tienes una cuenta en TodoLegal, puedes</p>
              <p>crear una Gratis.</p>
            </>
          ) : (
            <>
              <p>Ingresa los siguientes datos para</p>
              <p>registrarte como un nuevo usuario</p>
            </>
          )}
        </div>
      }
    </div>
  );
}

export default Banner;
