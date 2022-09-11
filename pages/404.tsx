import {NextPage} from 'next';

const FourOFour: NextPage<unknown> = () => (
	<section className="grid gap-12">
		<h2 className="text-2xl font-bold">404: Page cannot be found.</h2>
		{/*<p>
	        \          SORRY            /
	         \                         /
	          \    This page does     /
	           ]   not exist yet.    [    ,'|
	           ]                     [   /  |
	           ]___               ___[ ,'   |
	           ]  ]\             /[  [ |:   |
	           ]  ] \           / [  [ |:   |
	           ]  ]  ]         [  [  [ |:   |
	           ]  ]  ]__     __[  [  [ |:   |
	           ]  ]  ] ]\ _ /[ [  [  [ |:   |
	           ]  ]  ] ] (#) [ [  [  [ :===='
	           ]  ]  ]_].nHn.[_[  [  [
	           ]  ]  ]  HHHHH. [  [  [
	           ]  ] /   `HH("N  \ [  [
	           ]__]/     HHH  "  \[__[
	           ]         NNN         [
	           ]         N/"         [
	           ]         N H         [
	          /          N            \
	         /           q,            \
	        /                           \
        </p>*/}
		<blockquote
			className="italic m-0 pl-4 border-l-4 border-gray-400 grid gap-5"
			cite="https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=henry6p3&Act=3&Scene=3&Scope=scene"
		>
			<p>hi</p>
			<footer>
				— P
			</footer>
		</blockquote>
	</section>
);

export default FourOFour;
