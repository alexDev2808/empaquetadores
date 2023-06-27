const $links = document.querySelector('#links');
const $name = document.querySelector('h1');
const $avatar = document.querySelector('#avatar');
const $desc = document.querySelector('#description');

const data = 
{
    name: "Jesus Alexis Tenorio Hernandez 🇲🇽",
    nickname: "alexDev2808",
    description: "Desarrollador FrontEnd. Creando propuestas y productos digitales que generan impacto. Soy una persona orientada a la precisión y dedicada con un enfoque proactivo y la capacidad crucial para operar tanto de forma independiente como en entornos de equipo de ritmo rápido.",
    avatar: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=300",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "",
      },
    ],
    
    links: 
    [
      {
        name: "Proyectos",
        url: "https://example.com/",
        color: "blue",
        emoji: "📖",
      },
      {
        name: "Blog",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love From Mexico",
};

const main = () => {
    let name = document.createTextNode(data.name);

    let links = data.links.map((social) => {
        return `<div class="bg-${social.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${social.color}-600 text-center hover:text-${social.color}-800 cursor-pointer"
          href="${social.url}" target="_blank">
          ${social.name}
        </a>
        <span>${social.emoji}</span>
      </div>`;
    }).join('');

    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $avatar.src = data.avatar;
    $desc.innerHTML = data.description;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();