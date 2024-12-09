const getHome = (req,res) => {
    res.json({message:"Welcome To Fuji-Film Api"});
};

const getHealth = (req,res) => {
    res.json({message:"Server is up and Running..."});
}

const getNotFound = (req,res)=>{
    res.status(404).json({message:"Api endponit not Found"});
}

export{
    getHome,
    getHealth,
    getNotFound,
}