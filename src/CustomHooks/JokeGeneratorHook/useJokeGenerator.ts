import { useEffect, useState } from "react";

export default function useJokeGenerator(firstName, lastName) {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () =>
          await fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((data) => {
              setJoke(data.setup + " " + data.punchline);
            });
        fetchJoke();
      }, [firstName, lastName]);

      return joke;
}