import React from 'react';
import Link from "next/link";
import './style_page.css';
import img1 from "../image/happy_friendship_day-HD.jpg";

function Blog(){
        return (
            <div className="relative px-8 mb-8">
                <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
                    <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
                        Travel Guide
                        <a className="cursor-pointer">
                            <div className="h-64 sm:h-96 relative">
                                <img
                                    src={img1}
                                    className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                    layout="fill"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
                        {/*<Link href={`/blog/${featuredPost.fields.slug}`}>*/}
                            <a className="cursor-pointer">
                                <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                                    Virtual Tours - Ways to Travel From Home
                                </div>
                                <div className="border-b-2 border-primary-500 w-8"></div>
                                <p className="text-sm mt-3 leading-loose text-gray-600 font-medium">
                                    Virtual tours can open up amazing and awe-inspiring locations around the world that may otherwise be inaccessible to you. You can experience the majesty of the Sistine Chapel, the wonder of the Great Wall of China, or the beauty of Hawaii from the comfort of your own home.
                                </p>
                            </a>
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        );
}

export default Blog;