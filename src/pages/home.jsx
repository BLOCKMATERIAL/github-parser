import React, { useEffect, useState, useRef } from "react";
import '../scss/components/_home.scss';
import axios from "axios"

const LOCALSTORAGE_KEY = "local_history_search";

const getRepositories = async (q) => {
    let repositories = [];

    try {
        const response = await axios.get(
            "https://api.github.com/search/repositories",
            {
                params: {
                    q
                }
            }
        );

        repositories = response.data.items;
    } catch {
        console.log("Произошла ошибка при запросе");
    } finally {
        return repositories;
    }
};

function Home() {

    const timerRef = useRef();
    const searchCache = useRef([]);

    const [value, setValue] = useState("");
    const [projects, setProjects] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        try {
            const storedHistory = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

            if (storedHistory) {
                setHistory(storedHistory);
            }
        } catch {
            console.log("Локалсторадж пустой");
        }
    }, []);


    const handleOnChange = (event) => {
        const value = event.target.value;

        setValue(value);
        clearTimeout(timerRef.current);

        if (!value) {
            return;
        }

        timerRef.current = setTimeout(
            async (projectName) => {
                const foundedRepositories = await getRepositories(projectName);

                searchCache.current.push(projectName);
                const cache = searchCache.current.slice(-5);

                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cache));
                setHistory(cache);
                setProjects(foundedRepositories);
            },
            500,
            value
        );
    };


    return (
        <div className="sub-content">
            <div className="search-content">
                <input className="input-search" type="text" onChange={handleOnChange} value={value} placeholder="Enter name project"/>

                <h2>Search History</h2>
                {history.map((q, index) => (
                    <p key={index}>{q}</p>
                ))}
            </div>


            <div className="cards">
                {projects.map((project, index) => (
                    <div key={index} className="card">
                        <div className="tittle-card">
                            <h2>{project.name}</h2>
                        </div>

                        <div className="language-card">
                           Language: <span>{project.language}</span>
                        </div>

                        <div className="description-card">
                           Description: <span>{project.description}</span>
                        </div>

                    </div>
                ))}

            </div>

        </div>



    )
}
export default  Home;