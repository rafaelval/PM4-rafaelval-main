function About(): React.ReactElement  {
  return (
    <div className=" flex flex-col items-center h-full bg-gradient-to-b from-transparent to-slate-500 text-stone-400 py-9 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-800">
            About Us
          </h2>
          <p className="mt-2 text-center text-lg text-slate-700">
            At TecShock, we are passionate about bringing the latest and most
            innovative tech products to our customers. Our mission is to provide
            cutting-edge technology solutions that enhance your digital
            lifestyle. With a curated selection of top-quality gadgets and
            accessories, we strive to make technology accessible and enjoyable
            for everyone. Explore our store and discover the future of tech with
            TecShock.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
