import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const RegisterPage = () => {
  let { showPassword, setShowPassword, handleRegisterSubmit, handleSubmit, register } = useAuth()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Spotify Logo */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>

        {/* Card */}
        <div className="bg-[#121212] rounded-2xl px-8 py-10 shadow-2xl">

          <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-tight">
            Sign up for free
          </h1>

          <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-4">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Your full name"
                className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none border border-transparent focus:border-white transition-colors duration-200"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none border border-transparent focus:border-white transition-colors duration-200"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none border border-transparent focus:border-white transition-colors duration-200 pr-12"
                  required
                />
                {/* Show/Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold py-3 rounded-full text-sm tracking-wide transition-all duration-200 hover:scale-105 mt-2"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Already have an account?{' '}
            <a href="/" className="text-white underline hover:text-[#1ed760] transition-colors font-semibold">
              Log in here
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default RegisterPage