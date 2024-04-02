const Rooms = [
    {
        id:"1",
        room: "D204"
    },
    {
        id:"2",
        room: "C004"
    },
    {
        id:"3",
        room: "D005"
    }
];

export const rooms$ = new Promise((resolve) => setTimeout(resolve, 200, Rooms));
