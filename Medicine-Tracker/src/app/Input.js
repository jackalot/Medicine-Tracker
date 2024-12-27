export default function Input(InputType) {
    console.log(InputType)
    if(InputType.type === "text")
    {
        return (
            <input className="border-gray-300 text-white-600 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            type="text"></input>
        )
    }
    else
    {
        return (
            <input className="border-gray-300 text-white-600 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            type="number"></input>
        )
    }
}
