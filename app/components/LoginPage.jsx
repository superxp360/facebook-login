export default function LoginPage() {
    return (
       <div className="flex flex-col justify-center items-center mt-[50px]">
        <div>
            <img className="w-[240px] h-50" src="./Images/facebookLogo.svg"/>
        </div>

        <div className="border-2 rounded-lg p-5 w-[396px] bg-white shadow-lg">
          <div>
            <div>
                <h1 className="text-lg font-normal text-center mb-5">Log Into Facebook</h1>
            </div>

            <form className="max-w-md space-y-4">
                <div className="mx-auto">
                    <div className="relative">
                        <input
                        type="email"
                        className="w-full h-[50px] rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm border-[1.5px]"
                        placeholder="Email or phone number"
                        />
                    </div>
                </div>

                <div>

                <div className="relative">
                    <input
                    type="password"
                    className="w-full h-[50px] rounded-lg border-[1.5px] border-gray-200 p-4 text-lg"
                    placeholder="Password"
                    />
                </div>
                </div>
                <button
                    type="submit"
                    className=" rounded-lg bg-blue-500 p-3 w-full text-xl font-semibold mx-auto  text-white"
                >
                   Log In
                </button>

                <a href="https://www.youtube.com/" className="flex flex-row justify-center text-blue-600 text-sm font-semibold hover:underline">Forgot account?</a>

                <p class="flex items-center">
                    <span class="flex-grow h-px bg-[#d8dade] mx-2"></span>
                    <p className="text-[#97999f]">or</p>
                    <span class="flex-grow h-px bg-[#d8dade] mx-2"></span>
                </p>

                <div className="flex flex-row justify-center">
                    <button className=" bg-[#42b72a] text-[15px] p-3 w-1/2 text-white rounded font-bold">Create new account</button>
                </div>
            </form>
           </div>
        </div>
        </div> 
    );
    }