import React from 'react';

const SignUpPage = () => {
    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-teal-900 via-teal-500 to-teal-200">
            <div className="rounded-md w-96 border-black bg-slate-100 p-10 shadow-gray-500 shadow-lg">
                <div className="flex justify-center items-center relative w-full mb-10">
                    <button className="absolute left-0 top-1">Back</button>
                    <h1 className="text-3xl text-teal-700 font-semibold">Sign Up</h1>
                </div>
                <form className="space-y-4">
                    <div className="flex justify-between">
                        {["Student", "Faculty", "Management"].map((role) => (
                            <label key={role} className="text-semibold text-gray-700 mb-2 flex items-center">
                                <input className="mr-2" type="radio" name="Role" value={role} />
                                {role}
                            </label>
                        ))}
                    </div>
                    {[
                        { label: "Name", type: "text", placeholder: "Name", name: "name" },
                        { label: "Phone Number", type: "number", placeholder: "Eg: 3475122943", name: "phone" },
                        { label: "Email", type: "email", placeholder: "Email Address", name: "email" },
                        { label: "Password", type: "password", placeholder: "Password", name: "password" }
                    ].map(({ label, type, placeholder, name }) => (
                        <div key={name} className="flex flex-col">
                            <label className="text-semibold text-gray-700 mb-2">{label}</label>
                            <input className="px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-full" type={type} placeholder={placeholder} name={name} />
                        </div>
                    ))}
                    <div className="flex justify-between w-full text-white">
                        <button className="px-4 py-2 rounded-md bg-teal-500">Login</button>
                        <button className="px-5 py-2 rounded-md bg-teal-500">Sign Up</button>
                    </div>
                    <button className="px-2 py-2 rounded-md text-red-700 hover:underline">Forgot Password?</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
