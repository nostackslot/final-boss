export const rooms = [
    {
      name: "Moscow room",
      desc: "2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSLm5wWb000h6xMw0PHhlLo9SH6vXvowGIW_iQLwgDgcJoUeelPNSqhPhA-VMth4mn6o&usqp=CAU",
      sideworld: "west",
      city: "moscow",
      id: crypto.randomUUID(),
      booked: true,
      nameclient: 'Alex',
      phoneclient: 999
    },
    {
      name: "Washington room",
      desc: "1",
      image: "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_30/v1/propertyimages/1/1861/16.jpg",
      sideworld: "northeast",
      city: "washington",
      id: crypto.randomUUID(),
      booked: false,
      nameclient: null,
      phoneclient: null
    }
  ]