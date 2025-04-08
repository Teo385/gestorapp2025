export let datosAPI = Array(
    {
        id: 1,
        nombreEspacio: "Sauna",
        descripcion: "Sauna familiar con vapores que enamoran",
        descripcionCompleta: "Relájate en nuestro sauna familiar, un espacio cálido y acogedor con vapores naturales que revitalizan cuerpo y mente. Ideal para desconectar del estrés diario y disfrutar de una experiencia de bienestar completa.",
        foto: [
            "https://plus.unsplash.com/premium_photo-1663100126765-1ad02ca4ff69?fm=jpg&q=60&w=3000",
            "https://www.ladygregoryhotel.ie/wp-content/uploads/2021/04/lady-gregory-hotel-sauna-1366x768-fp_mm-fpoff_0_0.jpg",
            "https://www.veltra.com/jp/guide/wp-content/uploads/2023/10/pixta_43403824_M-1024x683.jpg"
        ],
        capacidd: 10,
        calendario: [
            { dia: "lunes", hora: "10:00-11:00" },
            { dia: "martes", hora: "11:00-12:00" }
        ]
    },
    {
        id: 2,
        nombreEspacio: "Cancha de tenis",
        descripcion: "Cancha para toda la familia",
        descripcionCompleta: "Disfruta de una cancha de tenis profesional perfecta para jugadores de todos los niveles. Ya sea para entrenamiento o diversión, es un espacio ideal para compartir tiempo activo con familiares y amigos.",
        foto: [
            "https://images.unsplash.com/photo-1541744686607-75102f024505?fm=jpg&q=60&w=3000",
            "https://a-static.besthdwallpaper.com/tennis-ball-standing-on-clay-tennis-court-on-a-sunlit-day-wallpaper-1366x768-88002_46.jpg",
            "https://images.unsplash.com/photo-1627314387807-df615e8567de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        ],
        capacidd: 4,
        calendario: [
            { dia: "miercoles", hora: "12:00-13:00" },
            { dia: "jueves", hora: "13:00-14:00" }
        ]
    },
    {
        id: 3,
        nombreEspacio: "Spa",
        descripcion: "Relájate en un ambiente único",
        descripcionCompleta: "Sumérgete en un ambiente de tranquilidad y bienestar con nuestros servicios de spa. Desde masajes relajantes hasta tratamientos terapéuticos, todo está diseñado para tu descanso físico y mental.",
        foto: [
            "https://www.mirage-lodge.com/wp-content/uploads/2022/10/spa-bath-5.jpg"
        ],
        capacidd: 4,
        calendario: [
            { dia: "viernes", hora: "10:00-11:00" },
            { dia: "lunes", hora: "13:00-14:00" }
        ]
    },
    {
        id: 4,
        nombreEspacio: "Restaurante",
        descripcion: "Disfruta de la mejor gastronomía",
        descripcionCompleta: "Un espacio gastronómico con una amplia variedad de platos nacionales e internacionales preparados por chefs expertos. Ideal para disfrutar de una experiencia culinaria de alto nivel en un entorno elegante.",
        foto: [
            "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg"
        ],
        capacidd: 4,
        calendario: [
            { dia: "martes", hora: "14:00-15:00" },
            { dia: "miercoles", hora: "15:00-16:00" }
        ]
    },
    {
        id: 5,
        nombreEspacio: "Mini golf",
        descripcion: "Diversión para toda la familia",
        descripcionCompleta: "Un campo de mini golf diseñado para todas las edades. Disfruta de una actividad lúdica y entretenida con obstáculos creativos, perfecta para pasar un buen rato en grupo.",
        foto: [
            "https://blog.marti.mx/wp-content/uploads/2023/01/diviertete-jugadno-minigolf-jpg.webp"
        ],
        capacidd: 4,
        calendario: [
            { dia: "jueves", hora: "10:00-11:00" },
            { dia: "viernes", hora: "11:00-12:00" }
        ]
    },
    {
        id: 6,
        nombreEspacio: "Peluquería",
        descripcion: "Estilo y cuidado personal",
        descripcionCompleta: "Renueva tu estilo en nuestra peluquería con servicios profesionales de corte, color y tratamientos capilares. Un espacio moderno para tu cuidado personal y bienestar estético.",
        foto: [
            "https://png.pngtree.com/background/20230516/original/pngtree-the-hair-salon-has-many-dark-wood-chairs-picture-image_2599813.jpg"
        ],
        capacidd: 4,
        calendario: [
            { dia: "lunes", hora: "12:00-13:00" },
            { dia: "martes", hora: "16:00-17:00" }
        ]
    },
    {
        id: 7,
        nombreEspacio: "Piscina climatizada",
        descripcion: "Piscina con temperatura controlada para relajarte",
        descripcionCompleta: "Nada en cualquier época del año en nuestra piscina climatizada. Con temperatura controlada y ambiente confortable, es el lugar ideal para ejercitarte o relajarte en el agua.",
        foto: [
            "https://cdn.aparthotellescorts.com/aparthotellescorts/2018/09/DSCF3015-emiliphotographer-0011-19092018-aparthotel-les-corts.jpg"
        ],
        capacidad: 20,
        calendario: [
            { dia: "miercoles", hora: "10:00-11:00" },
            { dia: "viernes", hora: "12:00-13:00" }
        ]
    },
    {
        id: 8,
        nombreEspacio: "Sala de juegos",
        descripcion: "Juegos de mesa, arcade y más diversión",
        descripcionCompleta: "Una sala equipada con videojuegos, máquinas arcade, juegos de mesa y entretenimiento para todas las edades. El lugar perfecto para pasar un rato divertido y desconectado de la rutina.",
        foto: [
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIuiYN1wQjz4/v1/-1x-1.webp"
        ],
        capacidad: 15,
        calendario: [
            { dia: "lunes", hora: "15:00-16:00" },
            { dia: "jueves", hora: "16:00-17:00" }
        ]
    },
    {
        id: 9,
        nombreEspacio: "Gimnasio",
        descripcion: "Equipado con lo último en tecnología fitness",
        descripcionCompleta: "Nuestro gimnasio está equipado con maquinaria de última generación, ideal para rutinas de cardio, fuerza y entrenamiento funcional. Ambiente seguro y asesoría para mejorar tu rendimiento físico.",
        foto: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fm=jpg&q=60&w=3000"
        ],
        capacidad: 10,
        calendario: [
            { dia: "martes", hora: "15:00-16:00" }
        ]
    },
    {
        id: 10,
        nombreEspacio: "Salón de eventos",
        descripcion: "Espacio para reuniones y celebraciones",
        descripcionCompleta: "Un salón versátil para todo tipo de eventos sociales o corporativos. Con capacidad para 50 personas, ideal para celebraciones, conferencias y encuentros familiares.",
        foto: [
            "https://www.tusanagustin.com/assets/media/lugares/lugares/forest-campestre/tu-san-agustin-forest-campestre-5.jpg?u=1661830645"
        ],
        capacidad: 50,
        calendario: [
            { dia: "viernes", hora: "10:00-11:00" }
        ]
    },
    {
        id: 11,
        nombreEspacio: "Sala de conferencias",
        descripcion: "Espacio ideal para reuniones y presentaciones",
        descripcionCompleta: "Un ambiente profesional con equipamiento audiovisual para reuniones de trabajo, presentaciones o talleres. Cómodo, bien iluminado y con capacidad para hasta 30 personas.",
        foto: [
            "https://proycon.com.mx/wp-content/uploads/2019/04/Foto-Sala-Consejo-min.jpg"
        ],
        capacidd: 30,
        calendario: [
            { dia: "miercoles", hora: "13:00-14:00" },
            { dia: "jueves", hora: "14:00-15:00" }
        ]
    },
    {
        id: 12,
        nombreEspacio: "Estudio de arte",
        descripcion: "Un lugar creativo para artistas y amantes del arte",
        descripcionCompleta: "Un espacio luminoso e inspirador para pintar, esculpir o explorar cualquier expresión artística. Ideal para artistas de todos los niveles que buscan un ambiente libre y creativo.",
        foto: [
            "https://i.ytimg.com/vi/IbO8AZZ47V8/maxresdefault.jpg"
        ],
        capacidd: 8,
        calendario: [
            { dia: "lunes", hora: "16:00-17:00" },
            { dia: "martes", hora: "10:00-11:00" }
        ]
    }
);
