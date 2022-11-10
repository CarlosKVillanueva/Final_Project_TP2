const claveAdmin = "ABC123";

function clasificarUsuarios(req, res, next) {
    if (req.header("palabraSecreta") === claveAdmin) {
        req.isAdmin = true;
    }
    next();
}

function soloAdmins(req, res, next) {
    if (req.isAdmin) {
        next();
    } else {
        res.sendStatus(403);
    }
}
