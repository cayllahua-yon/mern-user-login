function HomePage() {
  return (
    <>
      <div>
        <h2 className="text-blue-600"> Encabezado:</h2>
        <p>¡Desarrolla interfaces web dinámicas y atractivas con React!</p>
      </div>
      <div>
        <h2 className="text-red-600">Subencabezado:</h2>
        <p>
          Una biblioteca de JavaScript para crear interfaces de usuario (UI)
          basadas en componentes reutilizables.
        </p>
      </div>
      <div>
        <h2 className="text-green-600">Cuerpo:</h2>
        <p>
          React es una biblioteca de JavaScript de código abierto creada por
          Facebook para construir interfaces de usuario (UI) declarativas,
          eficientes y fáciles de mantener.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-600">¿Qué hace que React sea especial?</h3>
        <p>
          <span className="text-yellow-400">Componentes reutilizables:</span> Divide tu interfaz de usuario en
          componentes pequeños y reutilizables, lo que facilita la creación y el
          mantenimiento de interfaces complejas. JSX: Utiliza JSX, una extensión
          de JavaScript que te permite escribir código HTML directamente en tus
          archivos JavaScript. Esto hace que el código sea más legible y fácil
          de entender. Rendimiento: React utiliza una representación virtual DOM
          (Document Object Model) para actualizar la interfaz de usuario de
          manera eficiente, lo que significa que tus aplicaciones serán rápidas
          y receptivas. Gran ecosistema: React tiene una comunidad grande y
          activa que ha creado una gran cantidad de bibliotecas y herramientas
          para ayudarte a crear aplicaciones increíbles.
        </p>
      </div>
      <div>
        <h3 className="text-fuchsia-600">¿Qué puedes crear con React?</h3>
        <p>
          <span className="text-fuchsia-300">Aplicaciones web de una sola página:</span> Crea aplicaciones web dinámicas e
          interactivas que no requieran recargas de página. Aplicaciones
          móviles: Utiliza React Native para crear aplicaciones móviles nativas
          con JavaScript. Interfaces de usuario para escritorio: Desarrolla
          interfaces de usuario de escritorio atractivas y funcionales con
          React.
        </p>
      </div>
    </>
  );
}

export default HomePage;
