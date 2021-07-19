import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import AcceptButton from '../atoms/AcceptButton';
import HandCardImage from '../atoms/cardImages/HandCardImage';
import BenchCardImage from '../atoms/cardImages/BenchCardImage';
import DeckImage from '../atoms/cardImages/DeckImage';
import BattleFieldImage from '../atoms/cardImages/BattleFieldImage';
import SideCardImage from '../atoms/cardImages/SideCardImage';
import TrashImage from '../atoms/cardImages/TrashImage';
import { useRecoilState, useRecoilValue } from 'recoil';
import turnDisplayState from '../State/turnDisplayState';
import handsState from '../State/handsState';
import sideCardState from '../State/sideCardState';
import benchState from '../State/benchState';
import UserNameContext from '../Context/UserNameContext';
import CardGallery from './CardGallery';
import displayGalleryState from '../State/displayGalleryState';
import chooseYourOrder from '../util/chooseYourOrder';
import requireCostState from '../State/requireCostState';
import displayGiveEnergyState from '../State/displayGiveEnergyState';
import FieldPokemonGallery from './FieldPokemonGallery';

const YourField = (props) => {
	const sideCard = useRecoilValue(sideCardState);
	const [turnDisplay, setTurnDisplay] = useRecoilState(turnDisplayState);
	const hands = useRecoilValue(handsState);
	const bench = useRecoilValue(benchState);
	const displayGallery = useRecoilValue(displayGalleryState);
	const userName = useContext(UserNameContext);
	const requireCost = useRecoilValue(requireCostState);
	const displayGiveEnergy = useRecoilValue(displayGiveEnergyState);

	return(
		<Grid container spacing={0}>
			<Grid item xs={2}>
				<Grid container spacing={0}>
					{/* サイドカード */}
					{sideCard.map(side =>
						<Grid item xs={6}>
							<SideCardImage key={side.ingame_id} sideCard={side}/>
						</Grid>
					)}
				</Grid>
			</Grid>
			<Grid item xs={7}>
				<Grid container spacing={0}>
					{/* バトル場 */}
					<Grid item xs={12}>
						<BattleFieldImage/>
					</Grid>
					<Grid item xs={12}>
						<Grid  container spacing={0}>
							{/* ベンチ */}
							{bench.map(benchCard => 
								<Grid item xs ={2}>
									<BenchCardImage key={benchCard.ingame_id} benchCard={benchCard}/>
								</Grid>
							)}
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid  container spacing={0}>
							{/* 手札 */}
							{/* {Object.keys(hands).map(key =>
								<Grid item xs={1}>
									<HandCardImage handCard={hands[key]} index={key}/>
								</Grid>
							)} */}
							{hands.map(handCard => 
								<Grid item xs={1}>
									<HandCardImage key={handCard.ingame_id} handCard={handCard}/>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={3}>
				<Grid container spacing={0}>
					{/* ダメカン表示予定場所 */}
					{/* デッキ */}
					<Grid item xs={12}>
						<DeckImage deck={props.deck}/>
					</Grid>
					{/* トラッシュ */}
					<Grid item xs={12}>
						<TrashImage/>
					</Grid>
						<Grid item xs={4}>
							{turnDisplay === userName.yourId && (
								<AcceptButton 
									name={'後攻'} 
									isCorrect={() => setTurnDisplay(chooseYourOrder(
										false, 
										userName.yourId, 
										userName.oppId
									))}
								/>
							)}
						</Grid>
						<Grid item xs={4}>
							{turnDisplay === userName.yourId && (
								<AcceptButton 
									name={'先攻'} 
									isCorrect={() => setTurnDisplay(chooseYourOrder(
										true,
										userName.yourId,
										userName.oppId
									))}
								/>
							)}
						</Grid>
						<Grid item xs={4}>
							{displayGallery && (
								<CardGallery title={'あなたのデッキ'}/>
							)}
							{requireCost && (
								<CardGallery title={'あなたの手札'}/>
							)}
							{displayGiveEnergy && (
								<FieldPokemonGallery/>
							)}
						</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default YourField;