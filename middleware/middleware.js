var middlewareObj = {};

// middlewareObj.checkCampgroundOwnership = function(req, res, next) {
//         if(req.isAuthenticated()) {
//         Campground.findById(req.params.id, function(err, foundCampground) {
//             if(err || !foundCampground){
//                 req.flash("error", "Campground not found.")
//                 res.redirect("/campgrounds/")
//             } else {
                
//                 if(foundCampground.author.id.equals(req.user._id) || req.user.isAdmin) {
//                     return next();
//                 }
//                 else {
//                     req.flash("error", "You don't have permission to do that.");
//                     res.redirect("/campgrounds/" + req.params.id);
//                 }
//             }
//         })
//     } else {
//         req.flash("error", "You need to be logged in to do that.")
//         res.redirect("back")
//     }
    
// }
// middlewareObj.checkCommentOwnership = function(req, res, next) {
//         if(req.isAuthenticated()) {
//         Comment.findById(req.params.comment_id, function(err, foundComment) {
//             if(err || !foundComment){
//                 req.flash("error", "Comment not found.")
//                 res.redirect("/campgrounds/" + req.params.id)
//             } else {
                
//                 if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
//                     return next();
//                 }
//                 else {
//                     req.flash("error", "You don't have permission to do that.")
//                     res.redirect("/campgrounds/" + req.params.id);
//                 }
//             }
//         })
//     } else {
//         req.flash("error", "You need to be logged in to do that.")
//         res.redirect("back")
//     }
// }
middlewareObj.isLoggedIn = function(req, res, next) {
        if(req.isAuthenticated()) {
        return next();
    }
    res.render("home", { toast: "loggedout", page: 'home' })
    
}



module.exports = middlewareObj