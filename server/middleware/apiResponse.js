
const apiResponse = (req, res, next) => {
  res.sendSuccess = (data, message, statusCode = 200) => {
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    return res.status(statusCode).json({
      status:'success',
      message,
      data,
    });
  };

  res.sendError = (message, error,  statusCode = 500) => {
    if (req.method === 'OPTIONS') {
      return res.status(statusCode).end();
    }

    const statusText =
      statusCode >= 400 && statusCode < 500 ? 'failure' : 'error';
    return res.status(statusCode).json({
      status: statusText,
      message,
      error,
    });
  };

  next();
};

export default apiResponse;
