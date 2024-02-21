interface ButtonProps {
    title: string
    className: string
}

export default function Button(props: ButtonProps) {
    return (
      <button className={props.className}>{props.title}</button>
    )
  }