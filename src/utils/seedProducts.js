import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const productos = [
    {
        id: "Azz123",
        nombre: "Shaila Dress",
        descripcion: "Un vestido blanco con tirantes finos, decorado con delicadas líneas fucsias que crean un diseño artístico y fluido. La falda asimétrica añade un toque moderno y elegante, ideal para eventos especiales.",
        stock: 305,
        categoria: "dresses",
        imagen: "/img/dressmint.jpeg",
        precio: 150
    }, 
    {
        id: "Azz456",
        nombre: "Roma Dress",
        descripcion: "Un encantador vestido blanco con un diseño romántico. Cuenta con un escote fruncido y delicados detalles de encaje en las mangas y el dobladillo. Ideal para ocasiones especiales o eventos al aire libre, este vestido ofrece un estilo femenino y elegante.",
        stock: 102,
        categoria: "dresses",
        imagen: "/img/dresslace.jpeg",
        precio: 70
    },
    {
        id: "Azz789",
        nombre: "Sia Dress",
        descripcion: "Un elegante vestido color crema con tirantes finos y detalle de lazo en el escote. La falda plisada en dos niveles agrega un toque dinámico y sofisticado. Es perfecto para eventos casuales o una salida elegante, combinando comodidad y estilo.",
        stock: 200,
        categoria: "dresses",
        imagen: "/img/dressmono.jpeg",
        precio: 50
    },
    {
        id: "Azz000",
        nombre: "Viena Dress",
        descripcion: "Un vestido gris simple y elegante, diseñado con líneas limpias y minimalistas. Ideal para cualquier ocasión, ofrece un estilo versátil y atemporal.",
        stock: 20,
        categoria: "dresses",
        imagen: "/img/dressgray.jpeg",
        precio: 50
    },
    {
        id: "Azz111",
        nombre: "Astrid Dress",
        descripcion: "Un vestido negro strapless con una falda suelta, que ofrece un estilo clásico y sofisticado. Perfecto para eventos formales o una noche especial, combina elegancia con un toque de libertad en el movimiento.",
        stock: 50,
        categoria: "dresses",
        imagen: "/img/dressblack.jpeg",
        precio: 45.00
    },
    {
        id: "Azz222",
        nombre: "Mila Dress",
        descripcion: "Un vestido largo sin tirantes en color blanco, con un diseño elegante y minimalista. Ideal para ocasiones formales, ofrece una silueta estilizada y sofisticada, realzando la figura de manera sutil.",
        stock: 100,
        categoria: "dresses",
        imagen: "/img/dressover.jpeg",
        precio: 100
    },
    {
        id: "Azz333",
        nombre: "Pia Dress",
        descripcion: "Un vestido corto en tono nude adornado con sutiles brillos, que le añaden un toque de glamour. Este diseño es perfecto para eventos nocturnos, combinando elegancia y un estilo moderno y sofisticado.",
        stock: 15,
        categoria: "dresses",
        imagen: "/img/dressnude.jpeg",
        precio: 50
    },
    {
        id: "Azz444",
        nombre: "Esmeralda Dress",
        descripcion: "Un vestido largo de satén en un elegante color verde esmeralda. Este diseño fluido y brillante realza la figura con su caída suave, proporcionando un look sofisticado y lujoso. Ideal para eventos formales, el vestido destaca por su tono vibrante y su acabado sedoso.",
        stock: 5,
        categoria: "dresses",
        imagen: "/img/dresssatin.jpeg",
        precio: 150
    },
    {
        id: "Azz555",
        nombre: "Mar Dress",
        descripcion: "Un elegante vestido azul con un corpiño estilo corset que realza la figura. La parte superior ajustada ofrece un soporte y definición, mientras que el diseño del corset añade un toque de sofisticación y elegancia. Perfecto para eventos especiales, combina un estilo clásico con un tono moderno.",
        stock: 10,
        categoria: "dresses",
        imagen: "/img/dressblue.jpeg",
        precio: 150
    },
    {
        id: "Azz777",
        nombre: "Lottie Dress",
        descripcion: "Un vestido color cocoa con encantadores volados en la falda, que añaden movimiento y un toque femenino al diseño. Perfecto para ocasiones casuales o eventos especiales, combina elegancia y un estilo coqueto.",
        stock: 100,
        categoria: "dresses",
        imagen: "/img/dresscocoa.jpeg",
        precio: 50
    },
    {
        id: "Azz888",
        nombre: "Mia Dress",
        descripcion: "Un vestido blanco con mangas largas que ofrece un estilo elegante y atemporal. Ideal para ocasiones formales o semi-formales, este diseño combina simplicidad y sofisticación, brindando una apariencia pulida y clásica.",
        stock: 15,
        categoria: "dresses",
        imagen: "/img/dresssleeve.jpeg",
        precio: 70
    },
    {
        id: "Bzz123",
        nombre: "Elara Top",
        descripcion: "Remera musculosa negra, básica y versátil. Confeccionada en algodón suave, ideal para el uso diario o como capa base para cualquier estilo. Corte ajustado que destaca tu figura con comodidad y simplicidad.",
        stock: 20,
        categoria: "tops",
        imagen: "/img/topblack.jpeg",
        precio: 40
    },
    {
        id: "Bzz456",
        nombre: "Lyra Top",
        descripcion: "Remera musculosa celeste básica, confeccionada en algodón suave para una comodidad todo el día. Con un corte moderno y ajuste relajado, es ideal para combinar con cualquier atuendo. Perfecta para un look casual y fresco.",
        stock: 30,
        categoria: "tops",
        imagen: "/img/topblue.jpeg",
        precio: 30
    },
    {
        id: "Bzz789",
        nombre: "Seraphina Top",
        descripcion: "Rinde al máximo con esta remera musculosa camuflada, perfecta para entrenamientos intensos. Su diseño en camuflaje no solo ofrece estilo, sino también una comodidad que se adapta a cada movimiento. Hecha de material transpirable y duradero, ideal para quienes buscan un look audaz y funcional en el gimnasio o al aire libre.",
        stock: 50,
        categoria: "tops",
        imagen: "/img/topcamu.jpeg",
        precio: 30
    },
    {
        id: "Bzz000",
        nombre: "Cancer Top",
        descripcion: "Un básico esencial en tu guardarropa, este top negro combina elegancia y versatilidad. Su diseño sencillo y ajustado es perfecto para cualquier ocasión, desde un look casual diario hasta una salida nocturna. Hecho de material suave y cómodo, es una prenda imprescindible que nunca pasa de moda.",
        stock: 3,
        categoria: "tops",
        imagen: "/img/topcancer.jpeg",
        precio: 40
    },
    {
        id: "Bzz111",
        nombre: "Aria Top",
        descripcion: "Elegancia y sofisticación definen este corset blanco. Confeccionado en un tejido de alta calidad, ofrece un ajuste ceñido y favorecedor. Ideal para realzar tu figura con un toque clásico y chic, es perfecto tanto para ocasiones especiales como para añadir un toque de glamour a tu estilo diario.",
        stock: 20,
        categoria: "tops",
        imagen: "/img/topcorset.jpeg",
        precio: 40
    },
    {
        id: "Bzz222",
        nombre: "Calista Top",
        descripcion: "Este top color crema es la combinación perfecta de estilo y sofisticación. Su tono neutro y su diseño sencillo lo hacen versátil para cualquier ocasión, desde un look casual hasta uno más refinado. Confeccionado en un material suave y cómodo, es una adición elegante y esencial a tu guardarropa.",
        stock: 100,
        categoria: "tops",
        imagen: "/img/topcream.jpeg",
        precio: 25
    },
    {
        id: "Bzz333",
        nombre: "Thalia Top",
        descripcion: "Destaca con estilo veraniego en este top rosa a crochet, inspirado en el diseño de un bikini. Su tejido delicado y su ajuste ligero ofrecen una sensación de frescura y confort, perfecto para días soleados y escapadas a la playa.",
        stock: 60,
        categoria: "tops",
        imagen: "/img/topcrochet.jpeg",
        precio: 40
    },
    {
        id: "Bzz444",
        nombre: "Isolde Top",
        descripcion: "Confort y estilo se encuentran en esta remera blanca de manga larga tipo hoodie. Su diseño relajado y su capucha ajustable ofrecen calidez y versatilidad para cualquier ocasión. Fabricada con material suave y transpirable, es perfecta para días frescos o para añadir un toque casual y moderno a tu look.",
        stock: 60,
        categoria: "tops",
        imagen: "/img/tophoodie.jpeg",
        precio: 25
    },
    {
        id: "Bzz555",
        nombre: "Selene Top",
        descripcion: "Este tube top rosa es la definición de frescura y feminidad. Con su diseño sin tirantes y ajuste ceñido, realza tu figura con un toque vibrante y moderno. Ideal para combinar con pantalones de cintura alta o faldas, es una prenda versátil que aporta un aire chic a cualquier outfit.",
        stock: 20,
        categoria: "tops",
        imagen: "/img/toppink.jpeg",
        precio: 30
    },
    {
        id: "Bzz666",
        nombre: "Morgana Top",
        descripcion: "Este top ruffle de una sola manga combina elegancia y originalidad con su diseño asimétrico y volantes delicados. Ideal para ocasiones especiales o para darle un toque único a tu look diario, ofrece un estilo moderno y sofisticado con un ajuste favorecedor",
        stock: 50,
        categoria: "tops",
        imagen: "/img/topruffle.jpeg",
        precio: 40
    },
    {
        id: "Bzz777",
        nombre: "Astrid Top",
        descripcion: "Destaca con vibrante frescura en este top strapless color verde lima. Su diseño sin tirantes y su tono llamativo aportan un toque audaz y moderno a cualquier outfit. Confeccionado en un material ligero y cómodo, es ideal para hacer una declaración de estilo en días soleados y ocasiones especiales.",
        stock: 25,
        categoria: "tops",
        imagen: "/img/topstrapples.jpeg",
        precio: 30
    },
    {
        id: "Bzz888",
        nombre: "Zephyra Top",
        descripcion: "Este tube top blanco es la esencia de la simplicidad y el estilo. Su diseño sin tirantes y ajuste ceñido lo convierten en una pieza versátil que puedes combinar con cualquier prenda. Hecho de material suave, es perfecto para un look fresco y elegante en cualquier ocasión.",
        stock: 5,
        categoria: "tops",
        imagen: "/img/toptube.jpeg",
        precio: 20
    },
    {
        id: "Czz123",
        nombre: "Lavinia Bottom",
        descripcion: "Con un estilo práctico y moderno, este pantalón de jean cargo combina comodidad con funcionalidad. Sus múltiples bolsillos ofrecen un toque utilitario, mientras que el ajuste versátil y el tejido duradero aseguran un look casual y robusto para el día a día.",
        stock: 50,
        categoria: "bottoms",
        imagen: "/img/bottombagggy.jpeg",
        precio: 60
    },
    {
        id: "Czz456",
        nombre: "Isadora Bottom",
        descripcion: "Este pantalón blanco oxford aporta elegancia y sofisticación a tu guardarropa. Su corte clásico y ajustado se complementa con un tejido de alta calidad que asegura comodidad y un acabado pulido. Ideal para ocasiones formales o para elevar tu estilo diario con un toque de distinción.",
        stock: 100,
        categoria: "bottoms",
        imagen: "/img/bottomflared.jpeg",
        precio: 50
    },
    {
        id: "Czz789",
        nombre: "Anabella Bottom",
        descripcion: "Elegancia y versatilidad definen esta pollera negra larga. Con su diseño fluido y corte sofisticado, ofrece un look chic que se adapta a cualquier ocasión, desde eventos formales hasta salidas casuales. Confeccionada en un material ligero y cómodo, es una pieza esencial en tu guardarropa.",
        stock: 5,
        categoria: "bottoms",
        imagen: "/img/bottomskirt.jpeg",
        precio: 55
    },
    {
        id: "Czz000",
        nombre: "Ophelia Bottom",
        descripcion: "Esta pollera de jean combina estilo casual y comodidad. Con su diseño clásico y corte versátil, es perfecta para un look relajado y moderno. Fabricada en denim duradero, ofrece un ajuste favorecedor y es ideal para crear outfits casuales con un toque de tendencia.",
        stock: 35,
        categoria: "bottoms",
        imagen: "/img/bottomdenim.jpeg",
        precio: 40
    },
    {
        id: "Czz111",
        nombre: "Imogen Bottom",
        descripcion: "Esta mini skirt negra es la mezcla perfecta de estilo y sofisticación. Con su diseño ajustado y versátil, se adapta a cualquier ocasión, desde salidas nocturnas hasta eventos casuales. Fabricada en un material cómodo y de alta calidad, es una prenda esencial para un look moderno y chic.",
        stock: 150,
        categoria: "bottoms",
        imagen: "/img/bottommini.jpeg",
        precio: 50
    },
    {
        id: "Czz222",
        nombre: "Naia Bottom",
        descripcion: "Esta mini skirt gris ofrece un look moderno y chic con su corte ajustado y elegante. Versátil y fácil de combinar, es perfecta para crear outfits tanto casuales como sofisticados. Confeccionada en un material cómodo y de calidad, es una pieza esencial para cualquier guardarropa.",
        stock: 100,
        categoria: "bottoms",
        imagen: "/img/bottomsgrey.jpeg",
        precio: 40
    },
    {
        id: "Czz333",
        nombre: "Amara Bottom",
        descripcion: "Este jean low rise blanco aporta un toque moderno y fresco a tu estilo. Su corte bajo y ajuste ceñido destacan tu figura con un diseño versátil que puedes combinar fácilmente con cualquier prenda. Hecho de denim de calidad, ofrece comodidad y un look pulido para cualquier ocasión.",
        stock: 50,
        categoria: "bottoms",
        imagen: "/img/bottomlowrise.jpeg",
        precio: 35
    },
    {
        id: "Czz444",
        nombre: "Celestia Bottom",
        descripcion: "Este jean baggy ofrece un estilo relajado y moderno con su ajuste holgado y cómodo. Confeccionado en denim duradero, es ideal para un look casual y desenfadado, perfecto para quienes buscan comodidad sin sacrificar el estilo.",
        stock: 40,
        categoria: "bottoms",
        imagen: "/img/bottomdenimj.jpeg",
        precio: 20
    },
    {
        id: "Czz555",
        nombre: "Fiora Bottom",
        descripcion: "Esta ruffled skirt blanca aporta un toque romántico y fresco a tu look. Con su diseño de volantes y su tejido ligero, ofrece un estilo elegante y fluido, perfecto para ocasiones especiales o para un look chic y femenino en cualquier momento.",
        stock: 60,
        categoria: "bottoms",
        imagen: "/img/bottomruffled.jpeg",
        precio: 30
    },
    {
        id: "Czz666",
        nombre: "Elowen Bottom",
        descripcion: "Este short boxer negro es la combinación perfecta de comodidad y estilo. Su diseño relajado y elástico ofrece un ajuste cómodo y versátil, ideal tanto para actividades deportivas como para un look casual. Fabricado en material suave y duradero, es una prenda básica que no puede faltar en tu guardarropa.",
        stock: 80,
        categoria: "bottoms",
        imagen: "/img/bottomboxer.jpeg",
        precio: 20
    },
    {
        id: "Czz777",
        nombre: "Jupiter Bottom",
        descripcion: "Este short boxer gris ofrece una mezcla de comodidad y estilo casual. Su diseño relajado y el tejido suave garantizan libertad de movimiento, mientras que el color neutro lo convierte en una opción versátil para cualquier ocasión. Ideal para un look informal y cómodo.",
        stock: 60,
        categoria: "bottoms",
        imagen: "/img/bottomgrey.jpeg",
        precio: 30
    },
    {
        id: "Czz888",
        nombre: "Genevieve Bottom",
        descripcion: "Esta pollera con volados celeste añade un toque romántico y alegre a tu look. Su diseño con volantes suaves y su color fresco ofrecen un estilo femenino y versátil, ideal para ocasiones especiales o para realzar tu look diario con un toque de elegancia.",
        stock: 5,
        categoria: "bottoms",
        imagen: "/img/bottomskirtb.jpeg",
        precio: 40
    },
    
]



const seedProducts = () => {
productos.map(({ id, ...rest }) => {
    const productosRef = collection(db, "productos")
    addDoc(productosRef, rest)
});
return
}

seedProducts()