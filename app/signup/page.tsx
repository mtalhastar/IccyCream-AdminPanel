import Form from "./component/form"

const SignUP = () => {
  return (
    <>
    <div className="relative bg-gray-200 h-[42rem]"
    >
    <div className="h-80 bg-black">
    <h1 className="text-fuchsia-50 text-center pt-7 font-extralight text-lg">Manage Your Favourite</h1>
    <h1 className="text-fuchsia-50 text-center pt-2 font-bold font-mono text-[25px]">IccyCreams</h1>
    </div>
       <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 bg-white h-80 w-80 rounded-md">
        <Form/>
        </div>
    </div>
    </>
  )
}

export default SignUP