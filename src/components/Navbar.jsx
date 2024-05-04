const Navbar = ({ children }) => {
  return (
    <div className="h-[50px] top-0 bg-[#FFFFFF] border-[#EAEAEA] w-full max-w-[1440px] fixed justify-between flex items-center px-4">
      <img
        src="https://s3-alpha-sig.figma.com/img/da5d/1a60/a15b8c74cdb514042c62e8658c20a662?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HyjBKw3hiowmTIDs6~yJDEPNBbmjvKqHt9jsRWWkuZBvVkXoi23j3scvs780MMLzd8gJFN2WY-QbdrfiJH4eQcuwulypH2lVIu5WcnFFyxp~BPlB0JofYF9VXYeKvnJyl2etIjzVt4bZLTQL45bh6XGkqx1kgvCxLZnwP1OOUbweyNi-7aI97iCJ9GFifGFflCMXIHSZBMc-2TawZM8gtC5P3MkH2ImO3qH4kegbtBWUdtTCL1imiTJbNjGZcKdwzLyfwfvMvZStZTPSpzI2AZMkHqEIS0gPxOx1IjUOFh2~RoYJFzc6JXQUUWTmWoeLjYkPsXtDZGSyOu6xc5fPYA__"
        alt="bg"
        className="w-[87.88px] h-[18px] "
      />
      {children}
    </div>
  );
};

export default Navbar;
