import React from 'react';

export default function Home() {
    return (
        <main>
            <img  src='image/img-2.jpg' alt='img' className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center  min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-4xl text-red-600 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Mirwes.</h1>
            </section>
        </main>
    )
}