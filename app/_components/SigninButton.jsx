function SigninButton() {
    return (
         <button className="flex items-center justify-center gap-3 w-64 border border-gray rounded-md py-2 px-4 text-gray hover:bg-grayLight transition">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.4 32.3 29.1 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l6-6C33.3 6.2 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.1 16.3 18.7 14 24 14c2.8 0 5.3 1 7.3 2.7l6-6C33.3 6.2 28.9 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5 0 9.6-1.9 13-5l-6-6c-2 1.5-4.5 2.5-7 2.5-5.1 0-9.4-3.3-10.9-8L6.4 33.2C9.7 39.6 16.3 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3C34.5 31 29.6 35 24 35c-5.3 0-9.9-3.3-11.6-8l-6.6 4.8C8.5 37.1 15.7 42 24 42c8.3 0 15.3-5.4 17.6-12.9.4-1.2.6-2.4.6-3.6 0-1.2-.1-2.3-.4-3.5z"
                />
              </svg>
              <span className="text-sm md:text-base max-md:text-black">Sign up with Google</span>
            </button>
    )
}

export default SigninButton
