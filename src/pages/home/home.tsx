import { useState } from 'react'
import {
	ArrowLeftOnRectangleIcon,
	Cog6ToothIcon,
	CogIcon,
	WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { Modal } from 'components/modal/modal'
import { Checkbox } from 'components/checkbox/checkbox'

import styles from './home.module.scss'
import { Button } from 'components/button/button'

const Home = () => {
	const [showModal, setShowModal] = useState(true)
	const menuItems = [
		{ name: 'General', icon: Cog6ToothIcon },
		{ name: 'Status', icon: CogIcon },
		{ name: 'Import', icon: ArrowLeftOnRectangleIcon }
	]
	const [selected, setSelected] = useState(menuItems[0].name)
	return (
		<Modal onClose={() => setShowModal(false)} showFooter={false} showModal={showModal}>
			<div className={clsx(styles.sidebar)}>
				<div>
					<WrenchScrewdriverIcon />
					<h3>User Settings</h3>
				</div>
				{menuItems.map(item => (
					<div
						onClick={() => setSelected(item.name)}
						className={clsx(styles.items, { [styles['active']]: selected === item.name })}>
						<item.icon className={clsx(styles.icon)} />
						<h4>{item.name}</h4>
					</div>
				))}
			</div>
			<form>
				<div className={clsx(styles['form-header'])}>
					<h3>{selected}</h3>
					<p>Set your {selected} preferences.</p>
				</div>
				{selected === 'Import' && (
					<>
						<h5>Microsoft Project</h5>
						<Checkbox label="Import 1-day tasks as milestones" name="import" />
						<Checkbox label="Hide empty rows from view" name="hide" />
						<div className={clsx(styles.divider)} />
						<h5>Microsoft Excel</h5>
						<Checkbox label="Import 1-day tasks as milestones" name="import" />
						<Checkbox label="Hide empty rows from view" name="hide" />
						<div className={clsx(styles.divider)} />
						<h5>Smartsheet</h5>
						<Checkbox label="Import 1-day tasks as milestones" name="import" />
						<Checkbox label="Hide empty rows from view" name="hide" />
					</>
				)}
				<div className={clsx(styles['button-container'])}>
					<Button onClick={() => setShowModal(false)} variant="neutral">
						Cancel
					</Button>
					<Button type="submit">Save</Button>
				</div>
			</form>
		</Modal>
	)
}

export default Home
