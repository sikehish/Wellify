import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, doc, onSnapshot,query,where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "../contexts/AuthContext";

const GratitudeJournal = () => {
    const { currentUser } = useAuth();
    const [gratitudeItems, setGratitudeItems] = useState([]);
    const [newGratitudeItem, setNewGratitudeItem] = useState({ title: "", body: "" });

    useEffect(() => {
        const q = query(collection(db, "gratitudeItems"), where("userId", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newGratitudeItems = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setGratitudeItems(newGratitudeItems);
        });
        return () => unsubscribe();
    }, [currentUser]);

    const handleAddGratitudeItem = async () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        await addDoc(collection(db, "gratitudeItems"), {
            userId: currentUser.uid,
            title: newGratitudeItem.title,
            body: newGratitudeItem.body,
            date: date,
            time: time
        });
        setNewGratitudeItem({ title: "", body: "" });
    };

    const handleDeleteGratitudeItem = async (id) => {
        await deleteDoc(doc(db, "gratitudeItems", id));
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Gratitude Journal</h1>
            <ul className="space-y-2">
                {gratitudeItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4">
                        <div>
                            <h5 className="text-xl font-bold">{item.title}</h5>
                            <span className="text-sm text-gray-500 block">{item.date} {item.time}</span>
                            <span className="text-md">{item.body}</span>
                        </div>
                        <button onClick={() => handleDeleteGratitudeItem(item.id)} className="bg-red-500 hover:bg-red-400 text-white rounded-lg px-3 py-1 ml-4">🗑️</button>
                    </li>
                ))}
            </ul>
            <div className="mt-5 flex flex-col">
                <input
                    type="text"
                    value={newGratitudeItem.title}
                    onChange={(e) => setNewGratitudeItem({ ...newGratitudeItem, title: e.target.value })}
                    placeholder="Title"
                    className="rounded-lg border-gray-300 border p-2 mb-2"
                />
                <textarea
                    value={newGratitudeItem.body}
                    onChange={(e) => setNewGratitudeItem({ ...newGratitudeItem, body: e.target.value })}
                    placeholder="Write something you're grateful for"
                    className="rounded-lg border-gray-300 border p-2 mb-2"
                />
                <button onClick={handleAddGratitudeItem} className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-1">Add</button>
            </div>
        </div>
    );
};

export default GratitudeJournal;
