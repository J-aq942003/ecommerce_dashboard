"use client";
import { getAllPosts } from "@/redux/actions/postsActions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addOne, minusOne, setName } from "@/redux/slices/counterSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useAppDispatch();
  const counterValueCount = useAppSelector(
    (state: any) => state.counterData.count
  );
  const counterValueName = useAppSelector(
    (state: any) => state.counterData.name
  );
  const isPostsLoading = useAppSelector(
    (state) => state.postsReducer.isLoading
  );
  const posts = useAppSelector((state) => state.postsReducer.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="">
      <div className="ml-20 mt-20">
        <button
          className="border px-4 py-3"
          onClick={() => {
            dispatch(addOne());
          }}
        >
          +
        </button>
        <span>{counterValueCount}</span>
        <button
          className="border px-4 py-3"
          onClick={() => {
            dispatch(minusOne());
          }}
        >
          -
        </button>
      </div>
      <div className="ml-20 mt-6">
        <input type="text" onChange={() => {}} className="border" />
        <label htmlFor="">{counterValueName}</label>
        <button
          className="border px-4 py-2"
          onClick={() => {
            dispatch(setName("Aasdasdli"));
          }}
        >
          Change Name
        </button>
      </div>
      <div className="ml-20">
        {isPostsLoading
          ? "Loading......"
          : posts.map((items: any, index) => {
              if (index < 50) return <div key={index}>{items.title}</div>;
            })}
      </div>
    </div>
  );
}
