"use client";

import CategoryForm from "./CategoryForm.tsx";
import { useState } from "react";
import { UiState } from "@/types";
import { QuestionsApi } from "@/api";


export default function CreateCategory({ title }: { title: string }) {
  const [uiState, setUiState] = useState<UiState>("initial");
  const [error, setError] = useState<string | undefined>(undefined);

  function onSubmit(title: string) {
    async function fetchData() {
      setUiState("loading");
      const api = new QuestionsApi();
      const response = await api.createCategory(title);

      if (typeof response === "string") {
        setUiState("error");
        setError(response as string);
        return;
      }
      setUiState("data");
    }
    fetchData();
  }

  return (
    <div>
      <h2>{title}</h2>
      {uiState === "loading" && <p>bæti við flokk...</p>}
      {uiState === "data" && <p>Flokk bætt við!</p>}
      {uiState === "error" && error && (
        <p>Villa við að bæta við flokk: {`${error}`}</p>
      )}
      {uiState === "initial" && <CategoryForm onSubmit={onSubmit} />}
    </div>
  );
}
