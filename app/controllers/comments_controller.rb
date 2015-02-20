class CommentsController < ApplicationController
	def create
    comment = post.comments.create(comment_params.merge(user_id: current_user.id))
    respond_with post, comment
  end

  def upvote
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with post, comment
  end

  private

  def post
    Post.find(params[:post_id])
  end
  
	def comment_params
    params.require(:comment).permit(:body)
  end
end
