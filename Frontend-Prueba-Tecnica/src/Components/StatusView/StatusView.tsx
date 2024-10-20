import React from 'react'

const ButtonStatus = ({text, color}: {text: string, color: string}) => {
    return (
        <div className={`flex justify-center items-center h-10 w-24 rounded-full text-white text-base font-bold px-3 ${color}`}>
            {text}
        </div>
    )
}

const StatusView = ({ status }: { status: string }) => {
    let color = "";
    switch (status) {
        case "Abierto":
            color = "bg-green-500";
            break;
        case "En Proceso":
            color = "bg-yellow-500";
            break;
        case "Finalizado":
            color = "bg-blue-500";
            break;
        default:
            color = "bg-gray-500";
            break;
    }

    return <ButtonStatus text={status} color={color} />;
}

export default StatusView;