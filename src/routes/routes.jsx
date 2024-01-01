import { Route, Routes } from "react-router-dom";
import { About, Bolim, Contact, Courses, Error, History, Home, Login, Parol, Payment, Premium, Profile, Registr, Video } from "../page";

function Routerr() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bolim" element={<Bolim />} />
      <Route path="/bolim/:id" element={<Courses />} />
      <Route path="/course/:id" element={<Video />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/about" element={<About />} />
      <Route path="/aloqa" element={<Contact />} />
      <Route path="/registr" element={<Registr />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<History />} />
      <Route path="/parol" element={<Parol />} />
      <Route path="/premium/:id" element={<Premium />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Routerr;
