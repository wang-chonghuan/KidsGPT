import React from "react";
import {useDispatch} from "react-redux";
import {updatePromptAction} from "../store/promptSlice";

export function HeaderBar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Multipal.AI</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">Settings</a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">Prompts</label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li onClick={() => {
                dispatch(updatePromptAction("我是四岁孩子，请你接下来的回答都简单一点，每个回答不超过50个字。"));
              }}>
                <a>Short answer</a>
              </li>
              <li onClick={() => {
                dispatch(updatePromptAction("你接下来把我发你的任何中文都翻译成英文。如果我发的是中文，你就翻译成英文。我不会发任何指令，我发的所有东西都需要翻译。"));
              }}>
                <a>Translator</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

