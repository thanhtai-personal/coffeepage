import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Color from 'root/color'

interface ReportingProps {

}

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#fff',
      padding: '25px 0 0',
      overflowX: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:1190px)': {
        padding: '15px 0'
      }
    },
    container: {

    },
    introduce1: {
      fontSize: '18px',
      lineHeight: '28px'
    },
    introduce2: {
      fontSize: '18px',
      lineHeight: '28px',
      marginTop: theme.spacing(2)
    },
    italic:{
      fontStyle: 'italic',
      color: Color.coffee
    }
  }),
))()

const Reporting = (props: ReportingProps) => {
  const classes = useStyles({})

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <Typography className={classes.introduce1}>
          {`FRD coffee chính thức được thành lập và đi vào hoạt động năm 2016 với khẩu hiệu xuyên suốt `}
            <b className={classes.italic}>{`“Giá trị thật từ hạt cà phê hái chín rang mộc”`}</b>
          {`đồng hành trên con đường phát triển và đổi mới cà phê Việt Nam trải rộng khắp thị trường thế giới.`}
        </Typography>
        <Typography className={classes.introduce2}>
          {`FRD coffee tự hào là một trong những doanh nghiệp tiên phong trong việc đồng hành cùng người nông dân để cùng nhau `}
          <b className={classes.italic}>{`“lưu giữ 100% vị cà phê truyền thống Việt Nam”`}</b>
          {`đồng thời lan tỏa giá trị và văn hóa cà phê Việt Nam. Bên cạnh đó, FRD coffee còn mang lại những hương vị mới, làn gió mới vào thị trường cà phê Việt Nam nhằm nâng cao giá trị văn hóa cà phê Việt Nam từ người nông dân, nhà bán lẻ đến người tiêu dùng.`}
        </Typography>
      </Container>
    </section>
  )
}

export default Reporting