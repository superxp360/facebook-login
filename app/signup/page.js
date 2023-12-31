"use client"


import { useState } from "react";

export default function SignupPage() {

const [custom, setCustom] = useState(false);


  return (
<>
  <div className="flex flex-col justify-start align-center h-[950px]">
      
          <img className="h-[100px]" src="Images/facebookLogo.svg"/>
        

    <div class="flex flex-col max-w-md mx-auto bg-white rounded-lg shadow">
      <div class=" flex flex-col border-b text-gray-300 w-full">
          <p class="self-center text-2xl pt-2 font-bold text-black sm:text-2xl ">
              Create a new account
          </p>
          <p class="justify-center text-sm pb-2 text-center text-[#606770] flex-items-center dark:text-gray-400">
            It's quick and easy.
          </p>
        </div>  
      <div class="p-6 ">
        <form action="#">
                <div class="flex gap-4 col-2 mb-2">
                     <div>
                        <input type="text" id="create-account-first-name" class=" rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black  shadow-sm"  placeholder="First name"/>
                      </div>

                      <div>
                        <input type="text" id="create-account-first-name" class=" rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black  shadow-sm" placeholder="Last Name"/>
                      </div>
                  </div>

                  <div className="mb-2">
                      <input type="text" id="create-account-first-name" class=" rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black  shadow-sm" placeholder="Mobile number or email"/>
                   </div>

                   <div>
                      <input type="text" id="create-account-first-name" class=" rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black  shadow-sm" name="First name" placeholder="New password"/>
                   </div>

                   <p className="mt-2 mb-1 text-sm text-[#606770]">Birthday</p>
                   <div class="flex gap-2 col-3 mb-2 ">
                      <div>
                        <select
                          id="month"
                          className="rounded-lg border border-[ccd0d4] w-[120px] py-2 p-1 bg-white text-black shadow-sm text-left"
                        >
                          <option value="January">Jan</option>
                          <option value="February">Feb</option>
                          <option value="March">Mar</option>
                          <option value="April">Apr</option>
                          <option value="May">May</option>
                          <option value="June">Jun</option>
                          <option value="July">Jul</option>
                          <option value="August">Aug</option>
                          <option value="September">Sep</option>
                          <option value="October">Oct</option>
                          <option value="November">Nov</option>
                          <option value="December">Dec</option>
                        </select>
                      </div>

                      

                      <div>
                        <select
                          id="day"
                          className="rounded-lg border border-[ccd0d4] w-[120px] py-2 p-1 bg-white text-black shadow-sm text-left"
                        >
                          {Array.from({ length: 31 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <select
                          id="day"
                          className="rounded-lg border border-[ccd0d4] w-[120px] py-2 p-1 bg-white text-black shadow-sm text-left"
                        >
                          {[...Array(2023 - 1901 + 1)].map((_, index) => {
                            const year =  2023 - index;
                            return(
                              <option key={year} value={year}>
                                {year}
                              </option>  
                            )
                          })};
                        </select>
                      </div>
                    </div>

                    <p className="mt-2 mb-1 text-sm text-[#606770]">Gender</p>

                    <div class="flex gap-3 col-3 mb-2">
                      <div className=" border border-[ccd0d4] rounded-lg p-2">
                          <label className="mr-8">Female</label>
                          <input type="radio" id="female" name="gender" value="female" checked={!custom} onChange={() => setCustom(false)}/>
                      </div>
                      
                      <div className="border border-[ccd0d4] rounded-lg p-2">
                          <label className="mr-8">Male</label>
                          <input type="radio" id="male" name="gender" value="male" checked={!custom} onChange={() => setCustom(false)}/>
                      </div>
                      
                      <div className="border border-[ccd0d4]rounded-lg p-2">
                          <label className="mr-8">Custom</label>
                          <input type="radio" id="custom" name="gender" value="custom" checked ={custom} onChange={() => setCustom(!custom)}/>
                      </div>
                    </div>

                    {custom && (
                    <div>
                      <div className="mb-2">
                        <select
                          id="create-account-first-name"
                          className="rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black shadow-sm"
                          name="First name"
                        >
                          <option disabled selected value="">Select your pronouns</option>
                          <option value="option1">She: "Wish her a happy birthday!"</option>
                          <option value="option2">He: "Wish him a happy birthday!"</option>
                          <option value="option3">They: "Wish them a happy birthday!"</option>
                        </select>
                      </div>
                       <p className="text-[12px] mb-2 text-[#606770]">Your pronoun is visible to everyone.</p>

                      <div className="mb-2">
                        <input type="text" id="create-account-first-name" class=" rounded-lg border border-[ccd0d4] w-full py-2 px-4 bg-white text-black  shadow-sm" name="First name" placeholder="Gender (optional)"/>
                     </div>
                    </div>
                    )}

                    <div>
                      <p className="text-[11px] mb-2">People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                      
                      <p className="text-[11px]">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                    </div>
                    
                    <div class="flex flex-row justify-center w-full my-4 ">
                    <button
                      className="py-2 px-4 bg-[#00a400] text-white text-center text-[18px] font-bold shadow-md rounded-lg w-1/2 hover:bg-[#008c00]">
                      Sign Up
                    </button>
                     </div>

                     <div className="flex flex-row justify-center text-md">
                        <a href="/" className="text-[#1877f2]">Already have an account?</a>
                     </div>
            </form>
          </div>
       </div>
       
    </div>

   
    <footer className="flex justify-center bg-white w-full h-20 bottom-0 left-0">
        <div className="flex flex-row justify-around items-center w-[265px]">
          <a href="https://github.com/superxp360/facebook-login" className="m-5" target='_blank'>
            <img className='h-8' src="Images/githubLogo.png" alt="No Show Password" />
          </a>
          <p className='m-2 text-gray-500'>See code on GitHub!</p>
        </div>
      </footer> 
 
    </>
  )
}