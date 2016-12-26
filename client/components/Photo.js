import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
	render() {
		const { post, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} className="grid-photo" />
					</Link>

					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">{post.likes}</span>
					</CSSTransitionGroup>
				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button className="likes">&hearts; {post.likes}</button>
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
}

export default Photo;