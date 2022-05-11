import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 2 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is in the word but in the wrong spot. This is very unlikely
        to happen to you while playing Onedle.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Onedle is the perfected form of Wordle based on &nbsp;
        <a href="https://github.com/cwackerfuss/react-wordle">
          Chase Wackerfuss's React clone
        </a>
        . -{' '}
        <a
          href="https://github.com/drmrd/onedle"
          className="underline font-bold"
        >
          Check out the code here!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
