const handleError = (error, req, res, next) => {
  const { status, errorContent, message } = error;
  console.log("Error information");
  res.status(status).json({
    message,
    error: errorContent ? errorContent.message : '',
  });
  return next(error);
};

module.exports = handleError;
