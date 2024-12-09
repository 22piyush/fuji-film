import Film from "../models/Film.js";


const postFilms = async (req, res) => {
  const {
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
  } = req.body;

  const newFilm = new Film({
    title: title,
    shortDescription: shortDescription,
    director: director,
    poster: poster,
    releaseYear: releaseYear,
    category: category,
    language: language,
    rating: rating,
  });

  const savedFilm = await newFilm.save();

  return res.status(201).json({
    success: true,
    message: "Film Created",
    data: savedFilm,
  });
};


const getFilms = async (req, res) => {

try{
  const films = await Film.find().select("-__v -createdAt -updatedAt");

  return res.status(200).json({
    success: true,
    data: films,
    message: "All Films Fetched",
  });
}
catch(e){
    return res.status(400).json({
        success: false,
        message: e.message,
        data: null,
      });
}
};


const getFilmById = async (req, res) => {
  const { id } = req.params;

  try {
    const film = await Film.findOne({ _id: id }).select(
      "-__v -createdAt -updatedAt"
    );

    if (film) {
      return res.status(200).json({
        success: true,
        data: film,
        message: "Film Fetched",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Film Not Found",
        data: null,
      });
    }
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};


const deleteFilmById = async(req,res) => {
    const {id} = req.params;

    try{
        const film = await Film.deleteOne({_id: id});

        return res.status(200).json({
            success:true,
            message:"Film Deleted",
            data:film,
        });

    }catch (e) {
        return res.status(400).json({
          success: false,
          message: e.message,
          data: null,
        });
      }

}

const updateFilmById = async(req,res) => {
    const {id} = req.params;

    const {
        title,
        shortDescription,
        director,
        poster,
        releaseYear,
        category,
        language,
        rating,
      } = req.body;
try{
      const updateFilm = await Film.updateOne({_id:id},{
        title: title,
        shortDescription: shortDescription,
        director: director,
        poster: poster,
        releaseYear: releaseYear,
        category: category,
        language: language,
        rating: rating,
      });

      return res.status(200).json({
        success:true,
        message:"Film Updated",
        data:updateFilm
      })
    }
    catch (e) {
        return res.status(400).json({
          success: false,
          message: e.message,
          data: null,
        });
      }
}

const updateFilmRatingById = async (req,res) =>{
    const {id} = req.params;
    const {rating} = req.body;

    try{
        const updateFilm = await Film.updateOne({_id:id}, {rating:rating});

        return res.status(200).json({
            success:true,
            message:"Film RAting Updated",
            data:updateFilm
          })
        }
        catch (e) {
            return res.status(400).json({
              success: false,
              message: e.message,
              data: null,
            });
          }
};

export { postFilms, getFilms, getFilmById,deleteFilmById,updateFilmById,updateFilmRatingById };
